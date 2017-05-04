import { NgModule, ModuleWithProviders }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {BaThemeConfig} from './theme.config';

//指令
import {BaThemeConfigProvider} from './theme.configProvider';

//组件
import {
  BaNavbarTop,
  BaMsgCenter,
  BaSidebar,
  BaMenu,
  BaMenuItem,
  BaBackTop,
  BaContentTop,
  BaCard,
  BaMarkdownEditor
} from "./component";

//服务
import {
  ProloaderServer,
  BaThemeSpinnerServer,
  BaImageLoader
} from "./service";

//管道
import { BaProfilePicture } from "./pipes";

//指令
import { BaSlimScroll } from "./directives";

const NGA_DIRECTIVES = [
  BaSlimScroll
]
//服务
const NGA_SERVICE = [
  ProloaderServer,
  BaThemeSpinnerServer,
  BaImageLoader
];

//组件
const NGA_COMPONENT = [
  BaNavbarTop,
  BaMsgCenter,
  BaSidebar,
  BaMenu,
  BaMenuItem,
  BaBackTop,
  BaContentTop,
  BaCard,
  BaMarkdownEditor
];

//管道
const NGA_PIPES = [
  BaProfilePicture
];




@NgModule({
  declarations: [
    ...NGA_COMPONENT,
    ...NGA_PIPES,
    ...NGA_DIRECTIVES
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ...NGA_COMPONENT,
    ...NGA_PIPES,
    ...NGA_DIRECTIVES
  ]
})


export class NgaModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: NgaModule,
      //服务
      providers: [
        BaThemeConfigProvider,
        BaThemeConfig,
        ...NGA_SERVICE
      ],
    };
  }
}
