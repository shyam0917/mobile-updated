import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page";
import { RegisterService } from './../services/register.service';
import { MessageService } from './../services/message.service';
import { ValidationConfig } from './../config/validation-config.constants';

import { Color } from "tns-core-modules/color";
import { TextField } from "tns-core-modules/ui/text-field";
import { Label } from "tns-core-modules/ui/label";


@Component({
	selector: 'ns-signup',
	templateUrl: './signup.component.html',
	providers:[RegisterService, MessageService],
	moduleId: module.id,
})
export class SignupComponent implements OnInit {
	public signupInfo = {
		name:"",
		email: "",
		mobile:"",
		password: ""
	};
	public errorMessage: any;
	public emailpattern=ValidationConfig.EMAIL_PATTERN;
	public mobilepattern=ValidationConfig.MOB_NO_PATTERN;
	public showVarification: boolean=false;
	public isLoading:boolean=false;

	constructor(private routerExtensions: RouterExtensions,
		private page: Page,
		private messageService: MessageService,
		private registerService:RegisterService) { }

	ngOnInit() {
		this.page.actionBarHidden = true;
	}

	gotologin(){
		this.routerExtensions.navigate(['/login']);
	}

	onFocus(args: any,labelObj) {
		const textField = <TextField>args.object;

		// animate the label sliding up and less transparent.
		labelObj.animate({
			translate: { x: 0, y: - 25 },
			opacity: 1,
		}).then(() => { }, () => { });

		// set the border bottom color to green to indicate focus
		textField.borderBottomColor = new Color('#4CAF50');
	}

	onBlur(args: any, labelObj) {
		const textField = <TextField>args.object;

		// if there is text in our input then don't move the label back to its initial position.
		if (!textField.text) {
			labelObj.animate({
				translate: { x: 0, y: 0 },
				opacity: 0.4
			}).then(() => { }, () => { });
		}
		// reset border bottom color.
		textField.borderBottomColor = new Color('#A9A9A9');
	}

	onSubmit(registerData){
		debugger;
		let student = registerData;
		this.isLoading=true;
		this.registerService.register(student).subscribe(data=>{
			debugger;
			this.isLoading=false;
			if(data['success']){
				this.messageService.onSuccess("Student Successfully Registered");
			this.routerExtensions.navigate(['/login']);
				this.showVarification=true;
			}
		},error=>{
			this.isLoading=false;
			this.errorMessage =error.error.msg;
			this.messageService.onError(this.errorMessage);

		})
	}



}
