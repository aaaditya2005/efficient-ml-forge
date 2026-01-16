import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {timeUnits.map((unit) => (
        <div
          key={unit.label}
          className="flex flex-col items-center glass-card rounded-xl p-4 md:p-6 min-w-[80px] md:min-w-[100px] border-glow-cyan"
        >
          <span className="text-3xl md:text-5xl font-bold text-primary tabular-nums">
            {unit.value.toString().padStart(2, "0")}
          </span>
          <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-1">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
