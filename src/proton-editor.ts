import {ParticlesEditor} from "qtk-particles-editor";
import {ProtonViewModal} from "./view-modals/view-modal";

export class ProtonEditor extends ParticlesEditor {
	public static run() : ParticlesEditor {
		return ParticlesEditor.run("proton-editor", ProtonViewModal.TYPE);
	}
};
