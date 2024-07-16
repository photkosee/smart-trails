import { useState } from "react";

import GooglePlacesAutocomplete from "react-google-places-autocomplete";

import { TrailOption, TrailOptions } from "./TrailOptions";
import { DifficultyOption, DifficultyOptions } from "./DifficultyOptions";
import { MemberOption, MemberOptions } from "./MemberOptions";
import { ExtraOption, ExtraOptions } from "./ExtraOptions";
import Checkbox from "./Checkbox";
import MultiCheckbox from "./MultiCheckbox";

export default function TrailForm() {
  const [fail, setFail] = useState(false);
  const [location, setLocation] = useState("");
  const [trail, setTrail] = useState(1);
  const [difficulty, setDifficulty] = useState(1);
  const [member, setMember] = useState(1);
  const [extra, setExtra] = useState<number[]>([]);

  const apiKey = import.meta.env.VITE_GOOGLE_PLACE_API;

  return (
    <div className="max-w-3xl w-full flex flex-col gap-9">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-extrabold">
          Let us know your preferences
        </h2>
        <p className="text-neutral-500">
          Provide us some basic information, and we'll find the perfect trail
          that fit your nature based on your preferences.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">Where would you like to explore?</h3>
        <div className="w-full flex flex-col">
          <GooglePlacesAutocomplete
            apiKey={apiKey}
            onLoadFailed={() => setFail(true)}
            debounce={700}
            selectProps={{
              onChange: (value) => {
                value && setLocation(value.label);
              },
            }}
          />
          {fail && <p className="text-red-500 self-end">Failed to load</p>}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">What kind of trails?</h3>
        <div className="w-full flex flex-wrap gap-x-5 gap-y-3 md:gap-y-5">
          {TrailOptions.map((option: TrailOption) => (
            <Checkbox
              key={option.id}
              id={option.id}
              name={option.name}
              state={trail}
              setState={setTrail}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">
          What difficulty level are you up to?
        </h3>
        <div className="w-full flex flex-wrap gap-x-5 gap-y-3 md:gap-y-5">
          {DifficultyOptions.map((option: DifficultyOption) => (
            <Checkbox
              key={option.id}
              id={option.id}
              name={option.name}
              state={difficulty}
              setState={setDifficulty}
            />
          ))}
        </div>
        <div className="w-full flex flex-col">
          grade1 (Flat even surface with no steps or steep sections), grade2 (No
          experience required), grade3 (Suitable for most ages and fitness
          levels), grade4 (Bushwalking experience recommended. Trails may be
          long, rough and very steep.), grade5 (Very experienced trailerers with
          specialised skills, including navigation and emergency first aid)
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">
          Any extra information?{" "}
          <span className="text-neutral-500">(Optional)</span>
        </h3>
        <div className="w-full flex flex-wrap gap-x-5 gap-y-3 md:gap-y-5">
          {ExtraOptions.map((option: ExtraOption) => (
            <MultiCheckbox
              key={option.id}
              id={option.id}
              name={option.name}
              state={extra}
              setState={setExtra}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">Who are you with?</h3>
        <div className="w-full flex flex-wrap gap-x-5 gap-y-3 md:gap-y-5">
          {MemberOptions.map((option: MemberOption) => (
            <Checkbox
              key={option.id}
              id={option.id}
              name={option.name}
              state={member}
              setState={setMember}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
