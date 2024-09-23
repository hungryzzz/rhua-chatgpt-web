import {SessionSetting} from "../interface/setting";
import {OpenAIAttribute} from "../interface/llm";

/**
 * 初始会话设置
 */
export const initialSessionSetting: SessionSetting = {
  userName: "我",
  defaultModel: "gpt-3.5-turbo",
  defaultSummaryModel: "gpt-3.5-turbo",
  defaultVisionModel: "gpt-4o",
  defaultModelPrecision: "creativity",
  defaultRoleId: "",
  defaultSystemMessage: "你现在是复旦大学SONIC实验室开发的大语言模型",
  chatMaxMemory: 4,
  chatMaxToken: 3000,
  chatSessionMaxNumber: 10,
  isShowHeaderTitle: "true",
  chatSessionLayout: "chat"
};

export const initialOpenaiAttribute: OpenAIAttribute = {
  baseURL: "http://chat.y-droid.com:8080/v1",
  apiKey: "abc",
  defaultModels: ['gpt-3.5-turbo', 'gpt-4', 'gpt-4-turbo', 'gpt-4o'],
  customModels: []
};

/**
 * 根据精度获取模型温度
 */
export const getModelTemperatureByPrecision = (precision: "creativity" | "balance" | "precision"): number => {
  switch (precision) {
    case "creativity":
      return 0.8;
    case "balance":
      return 0.5;
    case "precision":
      return 0.2;
    default:
      return 0.5;
  }
};

/**
 * 根据精度获取模型topP
 */
export const getModelTopPByPrecision = (precision: "creativity" | "balance" | "precision"): number => {
  switch (precision) {
    case "creativity":
      return 0.9;
    case "balance":
      return 0.7;
    case "precision":
      return 0.5;
    default:
      return 0.8;
  }
};