import getRandomColor from "shared/utils/getRandomColor";

export type DrawCircle = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    r: number,
    lineWidth: number,
    color: string,
    alpha: number,
) => void;


export const drawCircle: DrawCircle = (ctx, x, y, r, lineWidth, color, alpha) => {
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.strokeStyle = color;
    ctx.globalAlpha = alpha;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
};


export const DEFAUTL_VAWES = [
    {
        r: .25,
        color: getRandomColor(),
    },
    {
        r: .5,
        color: getRandomColor(),
    },
    {
        r: .75,
        color: getRandomColor(),
    },
    {
        r: 1,
        color: getRandomColor(),
    },
];