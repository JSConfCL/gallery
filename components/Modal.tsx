import { Dialog, Transition } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { Fragment, useRef, useState } from "react";
import useKeypress from "react-use-keypress";
import type { ImageProps } from "../utils/types";
import SharedModal from "./SharedModal";

const InternalModal = ({
  images,
  handleClose,
}: {
  images: ImageProps[];
  handleClose: () => void;
}) => {
  const router = useRouter();

  const { photoId } = router.query;
  let index = Number(photoId);

  const [direction, setDirection] = useState(0);
  const [curIndex, setCurIndex] = useState(index);

  function changePhotoId(newVal: number) {
    if (newVal > index) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setCurIndex(newVal);
    router.push(
      {
        query: { photoId: newVal },
      },
      `/p/${newVal}`,
      { shallow: true },
    );
  }

  useKeypress("ArrowRight", () => {
    if (index + 1 < images.length) {
      changePhotoId(index + 1);
    }
  });

  useKeypress("ArrowLeft", () => {
    if (index > 0) {
      changePhotoId(index - 1);
    }
  });
  return (
    <SharedModal
      index={curIndex}
      direction={direction}
      images={images}
      changePhotoId={changePhotoId}
      closeModal={handleClose}
      navigation={true}
    />
  );
};
export default function Modal({
  images,
  isOpen,
  onClose,
}: {
  images: ImageProps[];
  isOpen: boolean;
  onClose?: () => void;
}) {
  let overlayRef = useRef();
  const router = useRouter();
  function handleClose() {
    router.push("/", undefined, { shallow: true });
    onClose();
  }

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        onClose={handleClose}
        initialFocus={overlayRef}
        className="fixed inset-0 z-10"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200 delay-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 z-10 bg-black/70 backdrop-blur-2xl" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300 delay-100"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className="fixed inset-0 z-20">
            <InternalModal images={images} handleClose={handleClose} />
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
