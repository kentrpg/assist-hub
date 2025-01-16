type ValidationResult<T> = {
  isValid: boolean;
  errors?: string[];
};

export function validateResponseType<T extends object>(
  response: unknown,
  schema: T
): ValidationResult<T> {
  console.log("response", response);
  if (typeof response !== "object" || response === null) {
    return {
      isValid: false,
      errors: ["Response must be an object"],
    };
  }

  const errors: string[] = [];
  
  Object.entries(schema).forEach(([key, value]) => {
    // 檢查屬性是否存在
    if (!(key in response)) {
      errors.push(`Missing required property: ${key}`);
      return;
    }

    // 檢查型別是否匹配
    const responseValue = (response as any)[key];
    if (typeof responseValue !== typeof value) {
      errors.push(
        `Type mismatch for ${key}: expected ${typeof value}, got ${typeof responseValue}`
      );
      return;
    }

    // 如果值是物件，遞迴檢查
    if (typeof value === "object" && value !== null) {
      const nestedValidation = validateResponseType(responseValue, value);
      if (!nestedValidation.isValid) {
        errors.push(...(nestedValidation.errors || []));
      }
    }
  });

  return {
    isValid: errors.length === 0,
    errors: errors.length > 0 ? errors : undefined,
  };
} 