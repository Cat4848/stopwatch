export function Seconds({seconds}) {
  console.log("seconds component -> seconds", seconds);
  return (
    <div>
      <div>s&nbsp;</div>
      <span className="seconds">{seconds}</span>
    </div>
  )
}