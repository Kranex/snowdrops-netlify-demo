import attributes from '../content/navbar.yml'

export type NavLink = {
    label: string,
    page: string
}

type Links = {
  primary_links: NavLink[],
  secondary_links: NavLink[],
}

export const {primary_links, secondary_links }: Links = attributes;

export const links: NavLink[] = [...primary_links, ...secondary_links];
