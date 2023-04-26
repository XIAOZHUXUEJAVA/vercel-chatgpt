import {
  IconBook,
  IconBrandQq,
  IconFileExport,
  IconCoffee,
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
        text="我的博客"
        icon={<IconBook size={18} />}
        onClick={() =>
          (window.location.href = 'https://xxxdgblog.netlify.app/')
        }
      />
      <SidebarButton
        text="想联系我"
        icon={<IconBrandQq size={18} />}
        onClick={() =>
          (window.location.href =
            'https://raw.githubusercontent.com/XIAOZHUXUEJAVA/GraphBed/main/img/202211172305474.png')
        }
      />
      <SidebarButton
        text="请我喝茶"
        icon={<IconCoffee size={18} />}
        onClick={() =>
          (window.location.href =
            'https://raw.githubusercontent.com/XIAOZHUXUEJAVA/GraphBed/main/img/202304262110020.png')
        }
      />
    </div>
  );
};
