import { useState } from "react";

import GooglePlacesAutocomplete from "react-google-places-autocomplete";

import { trailOptionProps, trailOptions } from "./trailOptions";
import { difficultyOptionProps, difficultyOptions } from "./difficultyOptions";
import { memberOptionProps, memberOptions } from "./memberOptions";
import { extraOptionProps, extraOptions } from "./extraOptions";
import Checkbox from "./Checkbox";
import MultiCheckbox from "./MultiCheckbox";
import { chatSession } from "@/api/GeminiModel";
import { Alert, Box, Button, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function TrailForm() {
  const [location, setLocation] = useState("");
  const [trail, setTrail] = useState(trailOptions[0].name);
  const [difficulty, setDifficulty] = useState(difficultyOptions[0].name);
  const [member, setMember] = useState(memberOptions[0].name);
  const [extra, setExtra] = useState<string[]>([]);
  const [open, setOpen] = useState(true);
  const apiKey = import.meta.env.VITE_GOOGLE_PLACE_API;

  const onsubmit = async () => {
    const user = localStorage.getItem("user");

    if (!user) {
      return;
    }

    // send a gemini api request to get the trails
    const prompt = "";

    const result = await chatSession.sendMessage(prompt);
  };

  return (
    <form className="max-w-2xl w-full flex flex-col gap-9 relative">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-extrabold text-[#00bf63]">
          Let us know your preferences
        </h2>
        <p className="text-neutral-500">
          Provide us some basic information, and we'll find the perfect trail
          that fit your nature based on your preferences.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold">Where would you like to explore?</h3>
        <div className="w-full flex flex-col z-20">
          <GooglePlacesAutocomplete
            apiKey={apiKey}
            debounce={700}
            selectProps={{
              onChange: (value) => {
                value && setLocation(value.label);
                value && setOpen(false);
              },
            }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold">What kind of trails?</h3>
        <div className="w-full flex flex-wrap gap-x-5 gap-y-3 md:gap-y-5">
          {trailOptions.map((option: trailOptionProps) => (
            <Checkbox
              key={option.id}
              name={option.name}
              img={option.img}
              state={trail}
              setState={setTrail}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold">
          What difficulty level are you up to?
        </h3>
        <div className="w-full flex flex-wrap gap-x-5 gap-y-3 md:gap-y-5">
          {difficultyOptions.map((option: difficultyOptionProps) => (
            <Checkbox
              key={option.id}
              name={option.name}
              img={option.img}
              state={difficulty}
              setState={setDifficulty}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold">
          Any extra information?{" "}
          <span className="text-neutral-500">(Optional)</span>
        </h3>
        <div className="w-full flex flex-wrap gap-x-5 gap-y-3 md:gap-y-5">
          {extraOptions.map((option: extraOptionProps) => (
            <MultiCheckbox
              key={option.id}
              name={option.name}
              img={option.img}
              state={extra}
              setState={setExtra}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold">Who are you with?</h3>
        <div className="w-full flex flex-wrap gap-x-5 gap-y-3 md:gap-y-5">
          {memberOptions.map((option: memberOptionProps) => (
            <Checkbox
              key={option.id}
              name={option.name}
              img={option.img}
              state={member}
              setState={setMember}
            />
          ))}
        </div>
      </div>

      <Box sx={{ width: "100%" }}>
        <Collapse in={open}>
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Please select the place you want to explore
          </Alert>
        </Collapse>
        <Button
          disabled={open}
          variant="outlined"
          onClick={() => {
            setOpen(true);
          }}
          className="w-full"
        >
          Find Trails
        </Button>
      </Box>
    </form>
  );
}
