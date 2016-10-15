"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var proton = require("proton");
require("../modals/templates");
var qtk_1 = require("qtk");
var proton_wrapper_1 = require("./proton-wrapper");
var qtk_particles_editor_1 = require("qtk-particles-editor");
var qtk_particles_editor_2 = require("qtk-particles-editor");
var qtk_particles_editor_3 = require("qtk-particles-editor");
var ProtonViewModal = (function (_super) {
    __extends(ProtonViewModal, _super);
    function ProtonViewModal(storage) {
        _super.call(this, null);
        this.canvas = document.createElement('canvas');
        this.storage = storage;
        this.registerCommands();
        this.registerConverters();
        this.doc = qtk_particles_editor_1.Document.create();
        this.createDoc("default");
        this.updateDocList();
    }
    ProtonViewModal.prototype.registerConverters = function () {
        this.registerValueConverter("radius", qtk_1.RangeFixer.create(0, 1000, 0, 1000, true));
        this.registerValueConverter("life", qtk_1.RangeFixer.create(0, 1000, 0, 1000, true));
        this.registerValueConverter("mass", qtk_1.RangeFixer.create(0, 1000, 0, 1000, true));
        this.registerValueConverter("point", qtk_1.Vector2Fixer.create(0, 1000, 0, 1000));
        this.registerValueConverter("scale", qtk_1.RangeFixer.create(0, 10, 0, 10, false));
        this.registerValueConverter("alpha", qtk_1.RangeFixer.create(0, 1, 0, 1, false));
        this.registerValueConverter("rate-num", qtk_1.RangeFixer.create(0, 1000, 0, 1000, true));
        this.registerValueConverter("rate-time", qtk_1.RangeFixer.create(0, 1000, 0, 1000, true));
        this.registerValueConverter("v-rpan", qtk_1.RangeFixer.create(0, 1000, 0, 1000, true));
        this.registerValueConverter("v-thapath", qtk_1.RangeFixer.create(-1000, 1000, -1000, 1000, true));
        this.registerValueConverter("delay", qtk_1.NumberFixer.create(0, 10));
    };
    ProtonViewModal.prototype.registerCommands = function () {
        this.registerCommand("draw", qtk_particles_editor_2.CommandDraw.create(this.canvas));
        this.registerCommand("about", qtk_particles_editor_1.CommandAbout.create(this, "https://github.com/a-jie/Proton"));
        this.registerCommand("content", qtk_particles_editor_1.CommandContent.create(this, "http://proton.jpeer.at/index.html"));
        this.registerCommand("new", qtk_particles_editor_2.CommandNew.create(this, qtk_particles_editor_1.Document.getTemplateList()));
        this.registerCommand("open", qtk_particles_editor_2.CommandOpen.create(this));
        this.registerCommand("remove", qtk_particles_editor_1.CommandRemove.create(this));
        this.registerCommand("save", qtk_particles_editor_2.CommandSave.create(this, false));
        this.registerCommand("save-as", qtk_particles_editor_2.CommandSave.create(this, true));
        this.registerCommand("export", qtk_particles_editor_2.CommandExport.create(this));
    };
    ProtonViewModal.prototype.createEmitter = function () {
        var data = this.data;
        var proton = ProtonViewModal.proton;
        if (!this.renderer) {
            var renderer = new Proton.Renderer('canvas', proton, this.canvas);
            this.renderer = renderer;
            renderer.start();
        }
        var emitter = this.protonEmitter;
        if (emitter) {
            proton.removeEmitter(emitter);
            emitter.destroy();
        }
        this.protonEmitter = proton_wrapper_1.createParticlesEmitter(proton, data);
    };
    ProtonViewModal.update = function () {
        ProtonViewModal.proton.update();
        requestAnimationFrame(ProtonViewModal.update);
    };
    ProtonViewModal.create = function (options) {
        if (!ProtonViewModal.proton) {
            ProtonViewModal.proton = new Proton();
            requestAnimationFrame(ProtonViewModal.update);
        }
        return new ProtonViewModal(options.storage);
    };
    ProtonViewModal.TYPE = "proton";
    ProtonViewModal.proton = null;
    return ProtonViewModal;
}(qtk_particles_editor_3.ParticlesViewModal));
exports.ProtonViewModal = ProtonViewModal;
;
qtk_particles_editor_3.ParticlesViewModalFactory.register(ProtonViewModal.TYPE, ProtonViewModal.create);
//# sourceMappingURL=view-modal.js.map