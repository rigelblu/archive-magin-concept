// Copyright rigélblu inc. All rights reserved.

export type ImageType = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type SceneType = {
  sceneMeta: {
    scene: number;
    chapter: number;
    shot: number;
  };
  title?: string;
  content: string[];
  image: ImageType;
};

// TODO: create book props {id, title, author, etc}
export enum Book {
  ProjectHailMary = 'Project Hail Mary',
}

const ProjectHailMary: SceneType[] = [
  {
    sceneMeta: {
      scene: 1,
      chapter: 1,
      shot: 1,
    },
    title: 'Chapter 1',
    content: [
      '"What\'s two plus two?"',
      "Something about the question irritates me. I'm tired. I drift back to sleep.",
      'A few minutes pass, then I hear it again.',
      '"What\'s two plus two?"',
      "The soft, feminine voice lacks emotion and the pronunciation is identical to the previous time she said it. It's a computer. A computer is hassling me. I'm even more irritated now.",
    ],
    image: {
      src: '/assets/common/images/storyboard-panel-1.webp',
      alt: 'An overhead, close up shot of a tired person...',
      width: 607,
      height: 362,
    },
  },
  {
    sceneMeta: {
      scene: 2,
      chapter: 1,
      shot: 1,
    },
    content: [
      '"Lrmln," I say. I\'m surprised. I meant to say "Leave me alone"—a completely reasonable response in my opinion—but I failed to speak.',
      '"Incorrect," says the computer. "What\'s two plus two?"',
    ],
    image: {
      src: '/assets/common/images/storyboard-panel-2.webp',
      alt: 'Close up, head shot person trying to talk',
      width: 612,
      height: 365,
    },
  },
  {
    sceneMeta: {
      scene: 3,
      chapter: 1,
      shot: 1,
    },
    content: [
      "Time for an experiment. I'll try to say hello.",
      '"Hlllch?" I say.',
      '"Incorrect. What\'s two plus two?"',
      "What's going on? I want to find out, but I don't have much to work with. I can't see. I can't hear anything other than the computer. I can't even feel. No, that's not true. I feel something. I'm lying down. I'm on something soft. A bed.",
    ],
    image: {
      src: '/assets/common/images/storyboard-panel-3.webp',
      alt: '',
      width: 607,
      height: 362,
    },
  },
];

export type BookData = {
  [key in Book]: SceneType[];
};

// OPTIMIZE: shape should be {{id: "book name", data: ProjectHailMary}}
const bookData: Record<Book, SceneType[]> = { [Book.ProjectHailMary]: ProjectHailMary };
export default bookData;
