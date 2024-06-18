export function chatbotResponse(input: string) {
  const inp = input.toLowerCase();
  if (inp.includes("hello")) {
    return "Hi! How can I help you dear customer?";
  } else if (inp.includes("taec")) {
    return "The TAEC is equal to 1Md.";
  }
}
