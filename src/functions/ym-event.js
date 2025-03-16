export const ymEvent = (event) => {
  if (window.ym && event) {
    ym(process.env.YM_METRIKA,'reachGoal',event)
  }
}
