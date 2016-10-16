import "../modals/templates";
import { ItemsStorage } from "qtk";
import { ParticlesViewModal, IParticlesViewModal } from "qtk-particles-editor";
export declare class ProtonViewModal extends ParticlesViewModal {
    canvas: any;
    protected renderer: any;
    protected protonEmitter: any;
    protected onDocReplaced(): void;
    constructor(storage: ItemsStorage);
    protected registerConverters(): void;
    protected registerCommands(): void;
    protected createEmitter(): void;
    static TYPE: string;
    static proton: any;
    static update(): void;
    static create(options: any): IParticlesViewModal;
}
