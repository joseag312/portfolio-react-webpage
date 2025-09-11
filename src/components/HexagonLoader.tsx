type HexagonLoaderProps = {
  speed?: number;
};

export function HexagonLoader({ speed = 2 }: HexagonLoaderProps) {
  const baseCycle = 6 / speed;
  const stagger = 1 / speed;

  const dur = `${baseCycle}s`;
  const s0 = `0s`;
  const s1 = `${1 * stagger}s`;
  const s2 = `${2 * stagger}s`;
  const s3 = `${3 * stagger}s`;
  const s4 = `${4 * stagger}s`;
  const s5 = `${5 * stagger}s`;

  return (
    <svg version='1.1' viewBox='0 0 320 320' fill='none' stroke='#000' strokeLinecap='round' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' role='img' aria-label='Loading'>
      <defs>
        <path id='r1'>
          <animate id='pbase' attributeName='d' values='m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0' dur={dur} repeatCount='indefinite' begin={s0} />
          <animate attributeName='stroke-width' values='0;4;4;4;0' dur={dur} repeatCount='indefinite' begin='pbase.begin' />
        </path>

        <path id='r2'>
          <animate attributeName='d' values='m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0' dur={dur} repeatCount='indefinite' begin={`pbase.begin+${s1}`} />
          <animate attributeName='stroke-width' values='0;4;4;4;0' dur={dur} repeatCount='indefinite' begin={`pbase.begin+${s1}`} />
        </path>

        <path id='r3'>
          <animate attributeName='d' values='m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0' dur={dur} repeatCount='indefinite' begin={`pbase.begin+${s2}`} />
          <animate attributeName='stroke-width' values='0;4;4;4;0' dur={dur} repeatCount='indefinite' begin={`pbase.begin+${s2}`} />
        </path>

        <path id='r4'>
          <animate attributeName='d' values='m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0' dur={dur} repeatCount='indefinite' begin={`pbase.begin+${s3}`} />
          <animate attributeName='stroke-width' values='0;4;4;4;0' dur={dur} repeatCount='indefinite' begin={`pbase.begin+${s3}`} />
        </path>

        <path id='r5'>
          <animate attributeName='d' values='m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0' dur={dur} repeatCount='indefinite' begin={`pbase.begin+${s4}`} />
          <animate attributeName='stroke-width' values='0;4;4;4;0' dur={dur} repeatCount='indefinite' begin={`pbase.begin+${s4}`} />
        </path>

        <path id='r6'>
          <animate attributeName='d' values='m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0' dur={dur} repeatCount='indefinite' begin={`pbase.begin+${s5}`} />
          <animate attributeName='stroke-width' values='0;4;4;4;0' dur={dur} repeatCount='indefinite' begin={`pbase.begin+${s5}`} />
        </path>
      </defs>

      {/* Six spokes × three rings pattern, same as yours */}
      <use xlinkHref='#r1' />
      <use xlinkHref='#r1' transform='rotate(60 160 160)' />
      <use xlinkHref='#r1' transform='rotate(120 160 160)' />
      <use xlinkHref='#r1' transform='rotate(180 160 160)' />
      <use xlinkHref='#r1' transform='rotate(240 160 160)' />
      <use xlinkHref='#r1' transform='rotate(300 160 160)' />

      <use xlinkHref='#r2' transform='rotate(30 160 160)' />
      <use xlinkHref='#r2' transform='rotate(90 160 160)' />
      <use xlinkHref='#r2' transform='rotate(150 160 160)' />
      <use xlinkHref='#r2' transform='rotate(210 160 160)' />
      <use xlinkHref='#r2' transform='rotate(270 160 160)' />
      <use xlinkHref='#r2' transform='rotate(330 160 160)' />

      <use xlinkHref='#r3' />
      <use xlinkHref='#r3' transform='rotate(60 160 160)' />
      <use xlinkHref='#r3' transform='rotate(120 160 160)' />
      <use xlinkHref='#r3' transform='rotate(180 160 160)' />
      <use xlinkHref='#r3' transform='rotate(240 160 160)' />
      <use xlinkHref='#r3' transform='rotate(300 160 160)' />

      <use xlinkHref='#r4' transform='rotate(30 160 160)' />
      <use xlinkHref='#r4' transform='rotate(90 160 160)' />
      <use xlinkHref='#r4' transform='rotate(150 160 160)' />
      <use xlinkHref='#r4' transform='rotate(210 160 160)' />
      <use xlinkHref='#r4' transform='rotate(270 160 160)' />
      <use xlinkHref='#r4' transform='rotate(330 160 160)' />

      <use xlinkHref='#r5' />
      <use xlinkHref='#r5' transform='rotate(60 160 160)' />
      <use xlinkHref='#r5' transform='rotate(120 160 160)' />
      <use xlinkHref='#r5' transform='rotate(180 160 160)' />
      <use xlinkHref='#r5' transform='rotate(240 160 160)' />
      <use xlinkHref='#r5' transform='rotate(300 160 160)' />

      <use xlinkHref='#r6' transform='rotate(30 160 160)' />
      <use xlinkHref='#r6' transform='rotate(90 160 160)' />
      <use xlinkHref='#r6' transform='rotate(150 160 160)' />
      <use xlinkHref='#r6' transform='rotate(210 160 160)' />
      <use xlinkHref='#r6' transform='rotate(270 160 160)' />
      <use xlinkHref='#r6' transform='rotate(330 160 160)' />
    </svg>
  );
}
