
var proton = require("proton");

import "../modals/templates";
import {PropsDesc, PagePropsDesc, Events} from "qtk";
import {RangeFixer, Vector2Fixer, NumberFixer} from "qtk"
import {createParticlesEmitter} from "./proton-wrapper";
import {ViewModal, IViewModal, ItemsStorage, ValidationResult} from "qtk"

import {CommandAbout, CommandRemove, CommandContent, Document, IDocument} from "qtk-particles-editor";
import {CommandDraw, CommandNew, CommandOpen, CommandSave, CommandExport} from "qtk-particles-editor";
import {ParticlesViewModal, IParticlesViewModal, ParticlesViewModalFactory} from "qtk-particles-editor";

declare var Proton : any;

export class ProtonViewModal extends ParticlesViewModal {
	public canvas : any;
	protected renderer : any;
	protected protonEmitter : any;
	
	constructor(storage:ItemsStorage) {
		super(null);
		
		this.canvas = document.createElement('canvas');
		
		this.storage = storage;
		this.registerCommands();
		this.registerConverters();

		this.doc = Document.create();
		this.createDoc("default");
		this.updateDocList();
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
		var proton = ProtonViewModal.proton;
		
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
		ProtonViewModal.proton.update();
		requestAnimationFrame(ProtonViewModal.update);
	}

	public static create(options:any) : IParticlesViewModal {
		if(!ProtonViewModal.proton) {
			ProtonViewModal.proton = new Proton();			
			requestAnimationFrame(ProtonViewModal.update);
		}

		return new ProtonViewModal(options.storage);
	}
};

ParticlesViewModalFactory.register(ProtonViewModal.TYPE, ProtonViewModal.create);

