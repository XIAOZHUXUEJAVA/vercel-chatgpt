import { IconCheck, IconTrash, IconX, IconBook } from '@tabler/icons-react';
import { FC, useState } from 'react';

import { useTranslation } from 'next-i18next';

import { SidebarButton } from '@/components/Sidebar/SidebarButton';

interface Props {
  onBlog: () => void;
}

export const Blog: FC<Props> = ({ onBlog }) => {
  return <>
      <SidebarButton
      text='我的博客'
      icon={<IconBook size={18} />}
      onClick={() => window.location.href = 'https://www.baidu.com'}    />
  </>
  
};
