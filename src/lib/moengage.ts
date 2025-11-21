export const initMoengage = async () => {
  if (typeof window === "undefined") return;

  try {
    const moengage = (await import("@moengage/web-sdk")).default;

    moengage.initialize({
      app_id: process.env.NEXT_PUBLIC_MOENGAGE_APP_ID!,
      cluster: "dc_3",
      useLatest: true,
    });

    console.log("MoEngage Loaded Successfully");
  } catch (err) {
    console.error("MoEngage SDK Init Failed:", err);
  }
};
