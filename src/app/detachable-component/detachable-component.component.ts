/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component( {
	selector: 'app-detachable-component',
	templateUrl: './detachable-component.component.html',
	styleUrls: [ './detachable-component.component.css' ]
} )
export class DetachableComponent implements AfterViewInit {
	isReattached = false;

	@ViewChild( 'container' ) private containerElement: ElementRef;
	@ViewChild( 'editor' ) private editorElement: ElementRef;

	ngAfterViewInit(): void {
		console.log( 'Component loaded, deataching' );

		this.editorElement.nativeElement.remove();
	}

	reattachEditor() {
		console.log( 'Button clicked, reattaching editor' );

		this.isReattached = true;
		this.containerElement.nativeElement.append( this.editorElement.nativeElement );
	}
}
