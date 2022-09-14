import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Tab } from './tab.model';
import { ContentContainerDirective } from './content-container.directive';

@Component({
  selector: 'app-pestanas',
  templateUrl: './pestanas.component.html',
  styleUrls: ['./pestanas.component.scss'],
})
export class PestanasComponent implements OnInit {

  @Input() tab!: Tab;
  @ViewChild(ContentContainerDirective, { static: true })
  contentContainer: ContentContainerDirective | undefined;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const tab: Tab = this.tab;
    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(tab.component);
    // const viewContainerRef = this.contentContainer.viewContainerRef;
    // const componentRef = viewContainerRef.createComponent(componentFactory);
    // componentRef.instance.data = tab.tabData;
  }
}
