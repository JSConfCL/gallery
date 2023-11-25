"use client";
import { useToast } from "@/components/ui/use-toast";
import { cx } from "class-variance-authority";
import { CheckCircle, ExternalLink, LoaderIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import { Skeleton } from "../../components/ui/skeleton";
import { AllEventsQuery } from "../../gql/graphql";
import {
  useImportGoogleAlbumMutation,
  useIsSuperAdminSuspenseQuery,
} from "../../gql/jschileAPI";
import { urlForImage } from "../../lib/sanity";
import { useRouter } from "next/navigation";

export const TOKEN_KEY = "jscl-import-token";

const fetchWrapper = (input: RequestInfo, init: RequestInit = {}) => {
  return fetch(input, {
    ...init,
    headers: {
      ...init.headers,
      Authorization: `Bearer ${window.localStorage.getItem(TOKEN_KEY)}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.statusText);
  });
};

const useGetAlbums = () => () =>
  fetchWrapper("https://photoslibrary.googleapis.com/v1/albums");

export const Importer = ({
  communityEvents,
}: {
  communityEvents: AllEventsQuery["allEventInstance"];
}) => {
  const [hiddenToken, setHiddenToken] = useState("");
  const [token, setToken] = useState("");
  const router = useRouter();
  const [defaultAlbums, setDefaultAlbums] = useState<
    {
      id: string;
      title: string;
      items: string;
      albumURL: string;
      photo: string;
    }[]
  >([]);
  const [selectedAlbum, setSelectedAlbum] = useState("");
  const [selectedSanityEvent, setSelectedSanityEvent] = useState("");
  const [loading, setLoading] = useState(false);
  const getAlbums = useGetAlbums();
  const { toast } = useToast();
  const superAdminQuery = useIsSuperAdminSuspenseQuery();
  const [importGoogleAlbumMutation, importGoogleAlbumMutationResults] =
    useImportGoogleAlbumMutation({
      onCompleted: () => {
        toast({
          title: "Tamos ready 🫰",
          description: "Las fotos se han encolado para importar",
        });
        setSelectedAlbum("");
        setSelectedSanityEvent("");
      },
      onError: () => {
        toast({
          title: "Error",
          description: "No pudimos importar las fotos.",
          variant: "destructive",
        });
      },
    });

  const loadAlbums = async () => {
    if (loading) {
      return;
    }
    try {
      setLoading(true);
      const response = await getAlbums();
      const albumsToShow = response.albums.map((album) => {
        return {
          id: album.id,
          title: album.title,
          items: album.mediaItemsCount,
          albumURL: album.productUrl,
          photo: album.coverPhotoBaseUrl,
        };
      });
      setDefaultAlbums(albumsToShow);
      toast({
        title: "Nice!",
        description: "Abumes listos.",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "No pudimos cargar los albumes de Google Photos.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (hiddenToken) {
      if (!superAdminQuery.data?.me.isSuperAdmin) {
        router.replace("/");
      }
      loadAlbums();
    }
  }, [hiddenToken]);
  return (
    <div className="flex flex-col gap-8 pb-[30vh]">
      <div className="flex flex-col gap-10">
        <h1 className="text-[3rem]">Google Image Importer</h1>
        <p className="text-2xl">
          1. Abre{" "}
          <Link
            href="https://auth-tokens.jschile.org/auth/google"
            target="_blank"
            passHref
          >
            <Button variant="secondary">este link</Button>
          </Link>{" "}
          (Con tu cuenta JSConf) y copia el token en el siguiente input. Luego
          haz click en "Guardar".
        </p>
        <div className="flex flex-row gap-4">
          <Input
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Copia tu token aquí"
          />
          <Button
            onClick={async () => {
              window.localStorage.setItem(TOKEN_KEY, token);
              setHiddenToken(token);
              setToken("");
              toast({
                title: "Token Guardado",
                description: "Tu token ha sido guardado correctamente.",
              });
            }}
          >
            Guardar
          </Button>
        </div>
      </div>
      {hiddenToken && (
        <>
          <Separator />
          <div
            className={cx("flex flex-col gap-4", {
              hidden: !hiddenToken,
            })}
          >
            <p className="text-2xl">
              2. Selecciona el album de google que quieras importar{" "}
            </p>
            <div>
              <Button size="sm" onClick={loadAlbums}>
                {loading ? (
                  <LoaderIcon className="animate-spin" />
                ) : (
                  "Re-Cargar Albumes"
                )}
              </Button>
            </div>
            {defaultAlbums.length > 0 && (
              <h2 className="text-xl">Albumes de Google photos</h2>
            )}
            <div className="flex flex-row gap-4 flex-wrap">
              {loading && (
                <>
                  <Skeleton className="w-80 h-96" />
                  <Skeleton className="w-80 h-96" />
                  <Skeleton className="w-80 h-96" />
                  <Skeleton className="w-80 h-96" />
                </>
              )}
              {defaultAlbums.map((album) => (
                <Card key={album.id} className="w-80 h-96">
                  <CardHeader className="text-bold">{album.title}</CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <img
                      src={album.photo}
                      className="w-full h-52 object-cover"
                    />
                    <div>
                      <Button
                        variant={
                          selectedAlbum === album.id ? "outline" : "default"
                        }
                        size="sm"
                        onClick={() => setSelectedAlbum(album.id)}
                      >
                        {selectedAlbum === album.id ? (
                          <>
                            Seleccionado{" "}
                            <CheckCircle size="14" className="ml-2" />{" "}
                          </>
                        ) : (
                          "Seleccionar"
                        )}
                      </Button>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link passHref href={album.albumURL} target="_blank">
                      <Button variant="link" className="px-0">
                        Ver Album en google photos{" "}
                        <ExternalLink size={16} className="ml-2" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-2xl">
              3. Selecciona el evento de sanity donde se importarán estas fotos
            </p>
            {defaultAlbums.length > 0 && (
              <h2 className="text-xl">Eventos de Sanity</h2>
            )}
            <div className="flex flex-row gap-4 flex-wrap">
              {communityEvents.map((event) => (
                <Card key={event._id} className="w-80 h-96">
                  <CardHeader className="text-bold">
                    {event.eventType.title + " — " + event.title ||
                      event.mergedTitle}
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <img
                      src={urlForImage(event?.image ?? event.eventType.image)}
                      className="w-full h-52 object-cover"
                    />
                    <div>
                      <Button
                        variant={
                          selectedSanityEvent === event._id
                            ? "outline"
                            : "default"
                        }
                        size="sm"
                        onClick={() => setSelectedSanityEvent(event._id)}
                      >
                        {selectedSanityEvent === event._id ? (
                          <>
                            Seleccionado{" "}
                            <CheckCircle size="14" className="ml-2" />{" "}
                          </>
                        ) : (
                          "Seleccionar"
                        )}
                      </Button>
                    </div>
                  </CardContent>
                  <CardFooter></CardFooter>
                </Card>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-2xl">
              4. Haz click en importar para comenzar el proceso.
            </p>
            <div>
              <Button
                disabled={
                  !hiddenToken ||
                  !selectedAlbum ||
                  !selectedSanityEvent ||
                  importGoogleAlbumMutationResults.loading
                }
                variant="default"
                onClick={async () => {
                  importGoogleAlbumMutation({
                    variables: {
                      input: {
                        albumId: selectedAlbum,
                        sanityEventInstanceId: selectedSanityEvent,
                        token: hiddenToken,
                      },
                    },
                  });
                }}
              >
                {importGoogleAlbumMutationResults.loading ? (
                  <LoaderIcon className="animate-spin" />
                ) : (
                  "Importar"
                )}
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
