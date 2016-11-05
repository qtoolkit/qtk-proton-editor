
var proton = require("proton");

import "../models/templates";
import {PropsDesc, PagePropsDesc, Events} from "qtk";
import {RangeFixer, Vector2Fixer, NumberFixer} from "qtk"
import {createParticlesEmitter} from "./proton-wrapper";
import {ViewModel, IViewModel, ItemsStorage, ValidationResult} from "qtk"

import {CommandAbout, CommandRemove, CommandContent, Document, IDocument} from "qtk-particles-editor";
import {CommandDraw, CommandNew, CommandOpen, CommandSave, CommandExport} from "qtk-particles-editor";
import {ParticlesViewModel, IParticlesViewModel, ParticlesViewModelFactory} from "qtk-particles-editor";

declare var Proton : any;

export class ProtonViewModel extends ParticlesViewModel {
	public canvas : any;
	protected renderer : any;
	protected protonEmitter : any;
	
	protected onDocReplaced() {	
		var globalCompositeOperation = this.data.globalCompositeOperation;
		if(globalCompositeOperation) {
			var context = this.canvas.getContext('2d');
			setTimeout(function() {
				context.globalCompositeOperation = globalCompositeOperation;
			}, 300);
		}
	}

	constructor(storage:ItemsStorage) {
		super(null, ProtonViewModel.TYPE, storage);
	}

	protected registerConverters() {
		this.registerValueConverter("radius", RangeFixer.create(0, 1000, 0, 1000, true));
		this.registerValueConverter("life", RangeFixer.create(0, 1000, 0, 1000, true));
		this.registerValueConverter("mass", RangeFixer.create(0, 1000, 0, 1000, true));
		this.registerValueConverter("point", Vector2Fixer.create(0, 1000, 0, 1000));
		this.registerValueConverter("scale", RangeFixer.create(0, 10, 0, 10, false));
		this.registerValueConverter("alpha", RangeFixer.create(0, 1, 0, 1, false));
		this.registerValueConverter("rate-num", RangeFixer.create(0, 1000, 0, 1000, true));
		this.registerValueConverter("rate-time", RangeFixer.create(0, 1000, 0, 1000, true));
		this.registerValueConverter("v-rpan", RangeFixer.create(0, 1000, 0, 1000, true));
		this.registerValueConverter("v-thapath", RangeFixer.create(-1000, 1000, -1000, 1000, true));
		this.registerValueConverter("delay", NumberFixer.create(0, 10));
	}

	protected registerCommands() {
		this.registerCommand("draw", CommandDraw.create(this.canvas));
		this.registerCommand("about", CommandAbout.create(this, "https://github.com/a-jie/Proton"));
		this.registerCommand("content", CommandContent.create(this, "http://proton.jpeer.at/index.html"));
		this.registerCommand("new", CommandNew.create(this, Document.getTemplateList()));
		this.registerCommand("open", CommandOpen.create(this));
		this.registerCommand("remove", CommandRemove.create(this));
		this.registerCommand("save", CommandSave.create(this, false));
		this.registerCommand("save-as", CommandSave.create(this, true));
		this.registerCommand("export", CommandExport.create(this));
	}

	protected createEmitter() {
		var data = this.data;
		var proton = ProtonViewModel.proton;
		
		if(!this.renderer) {
			var renderer = new Proton.Renderer('canvas', proton, this.canvas);
			this.renderer = renderer;
			renderer.start();
		}

		var emitter = this.protonEmitter;
		if(emitter) {
			proton.removeEmitter(emitter);
			emitter.destroy();
		}

		this.protonEmitter = createParticlesEmitter(proton, data);
	}

	public static TYPE = "proton";
	public static proton = null;
	public static update() {
		ProtonViewModel.proton.update();
		requestAnimationFrame(ProtonViewModel.update);
	}

	public static create(options:any) : IParticlesViewModel {
		if(!ProtonViewModel.proton) {
			ProtonViewModel.proton = new Proton();			
			requestAnimationFrame(ProtonViewModel.update);
		}

		return new ProtonViewModel(options.storage);
	}
};

ParticlesViewModelFactory.register(ProtonViewModel.TYPE, ProtonViewModel.create);

