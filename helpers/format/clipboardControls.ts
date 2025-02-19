type ClipboardControls = {
  url: string;
  copyToClipboard: () => Promise<boolean>;
  copyToExecCommand: () => boolean;
};

export const createClipboardControls = (url: string): ClipboardControls => {
  return {
    url,
    
    // 使用支援 Clipboard API 複製
    copyToClipboard: async () => {
      try {
        await navigator.clipboard.writeText(url);
        return true;
      } catch (error) {
        console.error('Clipboard API 複製失敗:', error);
        return false;
      }
    },

    // 使用 execCommand 複製 (降級瀏覽器通用方案)
    copyToExecCommand: () => {
      const textarea = document.createElement("textarea");
      textarea.value = url;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);

      try {
        textarea.select();
        const success = document.execCommand("copy");
        document.body.removeChild(textarea);
        return success;
      } catch (error) {
        console.error('execCommand 複製失敗:', error);
        document.body.removeChild(textarea);
        return false;
      }
    }
  };
};
