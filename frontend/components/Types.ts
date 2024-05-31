export interface Project {
    _id: string;
    projectLink: string;
    imgUrl: string;
    title: string;
    description: string;
    icons?: { img: string; stack: string }[];
    codeLink: string;
};

export interface Brand {
    _id: string;
    imgUrl: string;
    name: string;
    nameImgUrl: string;
};

export interface Work {
    _id: string;
    name: string;
    company: string;
    desc: string;
    thumbnail: string;
};

export interface Experience {
    works: Work[];
};