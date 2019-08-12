import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { MyCoursesRoutingModule } from "./myCourses-routing.module";
import { MyCoursesComponent } from "./myCourses.component";

@NgModule({
	imports: [
		NativeScriptCommonModule,
		MyCoursesRoutingModule,
		NativeScriptUIListViewModule
	],
	declarations: [
		MyCoursesComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class MyCoursesModule { }
