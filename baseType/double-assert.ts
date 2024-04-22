const str4: string = "putong";

// (str as { handler: () => {} }).handler();

(str as unknown as { handler: () => {} }).handler();
