import {ParticlesEditor} from "qtk-particles-editor";
import {ProtonViewModel} from "./view-models/view-model";

export class ProtonEditor extends ParticlesEditor {
	public static run() : ParticlesEditor {
		return ParticlesEditor.run("proton-editor", ProtonViewModel.TYPE);
	}
};
