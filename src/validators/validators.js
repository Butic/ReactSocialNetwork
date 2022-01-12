export const required = value => value ? undefined : "Text field is requierd";

export const maxLengthCreator = maxLength => value => value.length < 30 ? undefined : `max length ${maxLength} symbols`;