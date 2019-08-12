import { Component, OnInit, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import { Page } from "tns-core-modules/ui/page";
import { Observable,EventData } from "tns-core-modules/data/observable";
import { registerElement } from "nativescript-angular/element-registry";
import { setCurrentOrientation, orientationCleanup } from 'nativescript-screen-orientation';
// import { Video } from 'nativescript-videoplayer';
// registerElement("VideoPlayer", () => Video);
// var youtubeParser = require('nativescript-youtube-parser');

@Component({
	selector: "VideoPlayer",
	moduleId: module.id,
	templateUrl: "./video-player.component.html"
})
export class VideoPlayerComponent implements OnInit,OnDestroy {
	public isLoading:boolean=false;
		public vr:string;
	constructor() { 
		// setCurrentOrientation("landscape", function () {
		// });
	}

	ngOnInit() {

	}


goBack(){

}

	ngOnDestroy() {
		orientationCleanup();
	}


}