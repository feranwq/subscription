import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.crgt.ilifecom.crgt.ilife',
  name: '国铁吉讯',
  groups: [
    {
      key: 0,
      name: '全屏广告-浮窗',
      quickFind: true,
      rules: '[id="com.crgt.ilife:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/14367493',
    },
    {
      key: 1,
      name: '全屏广告-通知提示',
      quickFind: true,
      rules: '[id="com.crgt.ilife:id/button_un_open"]',
      snapshotUrls: 'https://i.gkd.li/import/14367931',
    },
  ],
});
