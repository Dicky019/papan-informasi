import { useState } from 'react'

// import { Menu, Transition } from '@headlessui/react'
// import { DotsVerticalIcon } from '@heroicons/react/outline'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from 'date-fns'

const meetings = [
  {
    id: 1,
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2022-02-12T13:00',
    endDatetime: '2022-05-11T14:30',
  },
  {
    id: 2,
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2022-02-12T18:00',
    endDatetime: '2022-05-11T18:30',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Kalender() {
  const today = startOfToday()
  const [selectedDay, setSelectedDay] = useState(today)
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  function previousMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  const selectedDayMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  )

  return (
    <div className="pt-16">
      <div className="mx-auto max-w-md px-4 sm:px-7 md:max-w-4xl md:px-6">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
          <div className="md:pr-14">
            <div className="flex items-center">
              <h2 className="flex-auto font-semibold text-gray-900">
                {format(firstDayCurrentMonth, 'MMMM yyyy')}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="mt-2 grid grid-cols-7 text-sm">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    'py-1.5'
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isEqual(day, selectedDay) && 'text-white',
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        'text-blue-500',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-900',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-400',
                      isEqual(day, selectedDay) &&
                        isToday(day) &&
                        'bg-blue-500',
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        'bg-gray-900',
                      !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        'font-semibold',
                      'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                    )}
                  >
                    <time dateTime={format(day, 'yyyy-MM-dd')}>
                      {format(day, 'd')}
                    </time>
                  </button>

                  <div className="mx-auto mt-1 h-1 w-1">
                    {meetings.some((meeting) =>
                      isSameDay(parseISO(meeting.startDatetime), day)
                    ) && (
                      <div className="h-1 w-1 rounded-full bg-sky-500"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <section className="mt-12 md:mt-0 md:pl-14">
            <h2 className="font-semibold text-gray-900">
              Schedule for{' '}
              <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                {format(selectedDay, 'MMM dd, yyy')}
              </time>
            </h2>
            <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
              {selectedDayMeetings.length > 0 ? (
                selectedDayMeetings.map((meeting) => (
                  <Meeting meeting={meeting} key={meeting.id} />
                ))
              ) : (
                <p>No meetings for today.</p>
              )}
            </ol>
          </section>
        </div>
      </div>
    </div>
  )
}

function Meeting({ meeting }) {
  const startDateTime = parseISO(meeting.startDatetime)
  const endDateTime = parseISO(meeting.endDatetime)

  return (
    <li className="group flex items-center space-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-gray-100">
      <img
        src={meeting.imageUrl}
        alt=""
        className="h-10 w-10 flex-none rounded-full"
      />
      <div className="flex-auto">
        <p className="text-gray-900">{meeting.name}</p>
        <p className="mt-0.5">
          <time dateTime={meeting.startDatetime}>
            {format(startDateTime, 'h:mm a')}
          </time>{' '}
          -{' '}
          <time dateTime={meeting.endDatetime}>
            {format(endDateTime, 'h:mm a')}
          </time>
        </p>
      </div>
    </li>
  )
}

const colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
]

// export default Kalender
