// 等待页面完全加载后再初始化，避免SDK加载不完整
window.onload = function() {
  // 初始化SDK并赋值给变量，方便后续调用showChatBot
  const cozeClient = new CozeWebSDK.WebChatClient({
    config: {
      type: 'bot',
      bot_id: '7608067831829299242', // 你的智能体ID，保留不变
      isIframe: false,
    },
    auth: {
      type: 'token',
      token: 'pat_Id4r9oapPe5yuESToUWaY0jSHCcK6GDCXx9fkc5e42ijTAI5eWM8IcRlbwVL47ra', // 你的PAT令牌
      onRefreshToken: async () => 'pat_Id4r9oapPe5yuESToUWaY0jSHCcK6GDCXx9fkc5e42ijTAI5eWM8IcRlbwVL47ra' // 和token一致
    },
    userInfo: {
      id: 'user', // 保留不变，也可改成grade7_student
      url: 'https://lf-coze-web-cdn.coze.cn/obj/eden-cn/lm-lgvj/ljhwZthlaukjlkulzlp/coze/coze-logo.png',
      nickname: '七年级学生', // 适配教学场景，替换原来的User
    },
    ui: {
      base: {
        icon: 'https://lf-coze-web-cdn.coze.cn/obj/eden-cn/lm-lgvj/ljhwZthlaukjlkulzlp/coze/chatsdk-logo.png',
        layout: 'pc',
        lang: 'zh-CN', // 关键：改成中文，避免界面英文适配问题
        zIndex: 1000
      },
      header: {
        isShow: true,
        isNeedClose: true,
      },
      asstBtn: {
        isNeed: false, // 关键：隐藏悬浮球，避免干扰
      },
      footer: {
        isShow: true,
        expressionText: '仅限本班内部学习使用 | Powered by coze，内容仅供参考', // 合规提醒
        linkvars: {}, // 关键：补充必填的空对象，避免参数缺失报错
      },
      chatBot: {
        el: undefined, // 关键：补充必填参数，指定默认容器
        title: '七年级下册道德与法治知识点查询', // 自定义标题，替换原来的Coze Bot
        uploadable: false, // 关键：禁用文件上传，适配教学场景
        width: 460, // 调整宽度，显示更完整
        isNeedAudio: false, // 禁用语音输入，避免课堂干扰
        isNeedFunctionCallMessage: false, // 隐藏插件调用信息
        isNeedAddNewConversation: false, // 禁用新建会话
        isNeedQuote: true, // 保留追问功能
      },
    },
  });

  // 核心中的核心：主动显示聊天框，没有这行永远看不到！
  cozeClient.showChatBot();
};




