import {
  IconBook,
  IconBrandQq,
  IconBug,
  IconCoffee,
  IconFileExport,
  IconSettings,
} from '@tabler/icons-react';
import { useContext, useState } from 'react';

import { useTranslation } from 'next-i18next';

import HomeContext from '@/pages/api/home/home.context';

import { SettingDialog } from '@/components/Settings/SettingDialog';

import { Import } from '../../Settings/Import';
import { Key } from '../../Settings/Key';
import { SidebarButton } from '../../Sidebar/SidebarButton';
import ChatbarContext from '../Chatbar.context';
import { ClearConversations } from './ClearConversations';
import { PluginKeys } from './PluginKeys';

export const ChatbarSettings = () => {
  const { t } = useTranslation('sidebar');
  const [isSettingDialogOpen, setIsSettingDialog] = useState<boolean>(false);

  const {
    state: {
      apiKey,
      lightMode,
      serverSideApiKeyIsSet,
      serverSidePluginKeysSet,
      conversations,
    },
    dispatch: homeDispatch,
  } = useContext(HomeContext);

  const {
    handleClearConversations,
    handleImportConversations,
    handleExportData,
    handleApiKeyChange,
  } = useContext(ChatbarContext);

  return (
    <div className="flex flex-col items-center space-y-1 border-t border-white/20 pt-1 text-sm">
      {conversations.length > 0 ? (
        <ClearConversations onClearConversations={handleClearConversations} />
      ) : null}

      <Import onImport={handleImportConversations} />

      <SidebarButton
        text={t('Export data')}
        icon={<IconFileExport size={18} />}
        onClick={() => handleExportData()}
      />

      <SidebarButton
        text={t('Settings')}
        icon={<IconSettings size={18} />}
        onClick={() => setIsSettingDialog(true)}
      />

      {!serverSideApiKeyIsSet ? (
        <Key apiKey={apiKey} onApiKeyChange={handleApiKeyChange} />
      ) : null}

      {!serverSidePluginKeysSet ? <PluginKeys /> : null}

      <SettingDialog
        open={isSettingDialogOpen}
        onClose={() => {
          setIsSettingDialog(false);
        }}
      />
      <SidebarButton
        text="网站报错"
        icon={<IconBug size={18} />}
        onClick={() =>
          // (window.location.href =
          //   'https://xxxdgblog.netlify.app/projects')

          window.open(
            'https://xxxdgblog.netlify.app/blog/chat%E5%87%BA%E7%8E%B0%E6%8A%A5%E9%94%99%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88',
            '_blank',
          )
        }
      />

      <SidebarButton
        text="我的博客"
        icon={<IconBook size={18} />}
        onClick={() =>
          // (window.location.href = 'https://xxxdgblog.netlify.app/')
          window.open('https://xxxdgblog.netlify.app/', '_blank')
        }
      />
      <SidebarButton
        text="想联系我"
        icon={<IconBrandQq size={18} />}
        onClick={() =>
          // (window.location.href =
          //   'https://xxxdgblog.netlify.app/projects')

          window.open('https://xxxdgblog.netlify.app/projects', '_blank')
        }
      />
      <SidebarButton
        text="请我喝茶(贡献一份力量)"
        icon={<IconCoffee size={18} />}
        onClick={() =>
          // (window.location.href =
          //   'https://raw.githubusercontent.com/XIAOZHUXUEJAVA/GraphBed/main/img/202211172305474.png')
          window.open('https://xxxdgblog.netlify.app/projects', '_blank')
        }
      />
    </div>
  );
};
