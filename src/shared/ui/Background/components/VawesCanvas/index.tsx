import { ComponentPropsWithoutRef, FC, useEffect, useRef } from "react";
import { DEFAUTL_VAWES, drawCircle } from "../../utils/VawesCanvas";


interface VawesCanvasProps extends ComponentPropsWithoutRef<'canvas'> {

}


const VawesCanvas: FC<VawesCanvasProps> = ({
    width = 800,
    height = 800,
    ...props
}) => {
    const ref = useRef<HTMLCanvasElement>(null) as { current: HTMLCanvasElement };

    useEffect(() => {
        const ctx = ref.current.getContext('2d') as CanvasRenderingContext2D;
        let vawes = DEFAUTL_VAWES;

        const interval = setInterval(() => {
            ctx.clearRect(0, 0, +width, +height);

            for (const circle of vawes) {
                drawCircle(
                    ctx,
                    +width / 2,
                    +height / 2,
                    +height / 4 * circle.r + 80,
                    2,
                    circle.color,
                    circle.r < 1 ? 1 - circle.r : 0
                );
            }

            vawes = vawes.map(circle => ({
                ...circle,
                r: circle.r < 1 ? circle.r + 0.002 : 0,
            }));

        }, 15);

        return () => clearInterval(interval);
    }, []);

    return (
        <canvas
            height={height}
            width={width}
            ref={ref}
            {...props}
        >
        </canvas>
    );
};


export default VawesCanvas;