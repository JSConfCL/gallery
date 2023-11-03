"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../components/ui/card";
import { CheckCircle, ExternalLink } from "lucide-react";
import { cx } from "class-variance-authority";

const TOKEN_KEY = "jscl-import-token";

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

export const Import = () => {
  const [token, setToken] = useState("");
  const [defaultAlbums, setDefaultAlbums] = useState<
    {
      id: string;
      title: string;
      items: string;
      albumURL: string;
      photo: string;
    }[]
  >([]);
  const [selectedAlbums, setSelectedAlbums] = useState(new Set<string>());
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const getAlbums = useGetAlbums();
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl">Google Image Importer</h1>
      <p>
        1. Abre{" "}
        <Link
          href="https://auth-tokens.jschile.org/auth/google"
          target="_blank"
          passHref
        >
          <Button variant="secondary">este link</Button>
        </Link>{" "}
        y copia el token en el siguiente input, y haz click en "Guardar".
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
            setToken("");
          }}
        >
          Guardar
        </Button>
      </div>
      <Separator />
      <p>2. Has Click en el boton "Cargar Albumes"</p>
      <div>
        <Button
          onClick={async () => {
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
            } catch (error) {
              console.error(error);
              setError(error);
            } finally {
              setLoading(false);
            }
          }}
        >
          Cargar Albumes
        </Button>
      </div>
      <div className="p4 flex flex-col gap-4">
        {defaultAlbums.length > 0 && (
          <p>3. Selecciona los albumes que quieras importar</p>
        )}
        <h2 className="text-2xl">
          Albumes de Google photos{" "}
          {selectedAlbums.size ? `(${selectedAlbums.size})` : ""}
        </h2>
        <div className="flex flex-row gap-4">
          {defaultAlbums.map((album) => (
            <Card key={album.id} className="w-80 h-full">
              <CardHeader className="text-bold">{album.title}</CardHeader>
              <CardContent className="flex flex-col gap-4">
                <img src={album.photo} className="w-full h-52 object-cover" />
                <div>
                  <Button
                    variant={
                      selectedAlbums.has(album.id) ? "outline" : "default"
                    }
                    size="sm"
                    onClick={() =>
                      setSelectedAlbums((prev) => {
                        const newSet = new Set(prev);
                        if (newSet.has(album.id)) {
                          newSet.delete(album.id);
                        } else {
                          newSet.add(album.id);
                        }
                        return newSet;
                      })
                    }
                  >
                    {selectedAlbums.has(album.id) ? (
                      <>
                        Seleccionado <CheckCircle size="14" className="ml-2" />{" "}
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
      <div>
        <Button disabled={!token || !selectedAlbums.size} variant="default">
          Importar
        </Button>
      </div>
    </div>
  );
};
