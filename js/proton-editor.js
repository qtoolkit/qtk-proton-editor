"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var qtk_particles_editor_1 = require("qtk-particles-editor");
var view_modal_1 = require("./view-modals/view-modal");
var ProtonEditor = (function (_super) {
    __extends(ProtonEditor, _super);
    function ProtonEditor() {
        _super.apply(this, arguments);
    }
    ProtonEditor.run = function () {
        return qtk_particles_editor_1.ParticlesEditor.run("proton-editor", view_modal_1.ProtonViewModal.TYPE);
    };
    return ProtonEditor;
}(qtk_particles_editor_1.ParticlesEditor));
exports.ProtonEditor = ProtonEditor;
;
//# sourceMappingURL=proton-editor.js.map