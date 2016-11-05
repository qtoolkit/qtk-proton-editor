export declare var defaultTemplate: {
    title: string;
    propsDesc: ({
        type: string;
        name: string;
        converter: string;
        path: string;
        value: {
            first: number;
            second: number;
        };
    } | {
        type: string;
        name: string;
        path: string;
        converter: string;
        value: {
            x: number;
            y: number;
        };
    } | {
        type: string;
        name: string;
    } | {
        type: string;
        name: string;
        converter: string;
        path: string;
        value: string;
        options: string[];
    } | {
        type: string;
    } | {
        type: string;
        name: string;
        converter: string;
        path: string;
        value: string;
    })[];
}[];
