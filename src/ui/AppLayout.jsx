import styled from 'styled-components';

import mobileDayTimeImage from '@/assets/images/mobile/bg-image-daytime.jpg';
import mobileNightTimeImage from '@/assets/images/mobile/bg-image-nighttime.jpg';
import tabletDayTimeImage from '@/assets/images/tablet/bg-image-daytime.jpg';
import tabletNightTimeImage from '@/assets/images/tablet/bg-image-nighttime.jpg';
import desktopDayTimeImage from '@/assets/images/desktop/bg-image-daytime.jpg';
import desktopNightTimeImage from '@/assets/images/desktop/bg-image-nighttime.jpg';

import { isDay } from '@/utils/time';
import { useClock } from '@/features/clock/useClock';

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;

  height: inherit;
  min-height: inherit;
`;

const StyledBackground = styled.picture`
  display: block;
  position: fixed;
  inset: 0;

  z-index: -10;

  &::after {
    content: '';
    position: fixed;
    inset: 0;
    background-color: rgba(var(--rgb-neutral-950) / 0.4);
    z-index: -5;
  }

  img {
    display: block;
    position: relative;
    z-index: -10;

    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

function AppLayout({ children }) {
  const time = useClock();
  const isDayTime = isDay(time);

  return (
    <StyledAppLayout>
      <StyledBackground>
        <source
          media="(min-width: 1024px)"
          srcSet={isDayTime ? desktopDayTimeImage : desktopNightTimeImage}
        />
        <source
          media="(min-width: 640px)"
          srcSet={isDayTime ? tabletDayTimeImage : tabletNightTimeImage}
        />
        <img
          src={isDayTime ? mobileDayTimeImage : mobileNightTimeImage}
          alt="Background image of a beautiful landscape"
        />
      </StyledBackground>
      {children}
    </StyledAppLayout>
  );
}

export default AppLayout;
