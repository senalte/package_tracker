export const dateFormater = date => {
  console.log(date);
    const now = new Date(date);
    const formatter = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long"
    });
    return formatter.format(now);
};
