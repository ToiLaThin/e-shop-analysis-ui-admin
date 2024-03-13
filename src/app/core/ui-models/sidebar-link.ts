export class SideBarLink {
    constructor(
        public haveHeading: boolean,
        public iconName: string,
        public url: string,
        public urlTitle: string,
        public headingTitle?: string
    ) {}
}
