export interface ArchiveEntry {
    id: number;
    date: string;
    title: string;
    description: string;
    tags: readonly string[];
}

export interface ArchiveData {
    projects: readonly ArchiveEntry[];
    posts: readonly ArchiveEntry[];
}

export interface ArchiveCardItem extends ArchiveEntry {
    type: "project" | "post";
}
