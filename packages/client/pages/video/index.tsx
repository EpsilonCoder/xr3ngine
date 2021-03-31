import { EmptyLayout } from '@xr3ngine/client-core/components/ui/Layout/EmptyLayout';
import Scene from '@xr3ngine/client-core/components/scenes/video';
import { useRouter } from 'next/router';
import React from 'react';
import NoSSR from 'react-no-ssr';

const VideoPage = () => {
  return (
    <EmptyLayout>
      <Scene locationName = 'test'/>
        <div>
        </div>
    </EmptyLayout>
  );
};

export default VideoPage;