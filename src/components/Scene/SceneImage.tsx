// Copyright rigélblu inc. All rights reserved.
import { joinClassesWithComponent } from '@rigelblu/rb-base-packages-join-classes';
import Image from 'next/image';
import bookData, { Book } from '@/data/bookData';

type Props = {
  scene: number;
};

/* OPTIMIZE: load image cdn */
export default function SceneImage({ scene }: Props) {
  const img = bookData[Book.ProjectHailMary][scene - 1].image;

  return (
    <Image
      src={img.src}
      alt={img.alt}
      className={joinClassesWithComponent(SceneImage.name, '!w-min object-scale-down pl-2')}
      fill
    />
  );
}
