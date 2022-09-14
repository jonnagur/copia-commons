import { Type } from '@angular/core';

export class Tab {
    public title: string;
    public tabData: any;
    public active!: boolean;
    public routeName: string;
    public hidden: boolean | undefined;
    public permissionId: string | undefined;
    public permissionType: string | undefined;
    public component!: Type<any>;

    constructor(routeName: string, title: string, tabData: any, hidden?: boolean, permissionId?: string, permissionType?: string) {
        this.tabData = tabData;
        this.routeName = routeName;
        this.title = title;
        this.hidden = hidden;
        this.permissionId = permissionId;
        this.permissionType = permissionType;
    }

}
