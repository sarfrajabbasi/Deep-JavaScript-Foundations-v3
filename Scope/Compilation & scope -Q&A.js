// [00:00:00]
// >> Speaker 1: I have a question about the function when the compilation is happening, the function other class gets its contents in the marble did you say?
// >> Kyle Simpson: I'm not sure I'm following.
// >> Speaker 1: So when other class is being compiled-
// >> Kyle Simpson: There's a map, like a plan, like a roadmap, made up by the compiler to say, for that blue bucket, you need to create an identifier called teacher.

// [00:00:28]

// >> Speaker 1: Okay.
// >> Kyle Simpson: Yeah, that's what compiler outputs is basically a plan for that scope.
// >> Speaker 1: So when does the targeting part happen?
// >> Kyle Simpson: That's at run time, which is the stage we're in now. At run time, when that otherClass function is pulled from some variable, like it is on line 13, and it's executed, well now we know there's a whole plan to make this blue bucket.

// [00:00:51]
// So let's go first make the whole blue bucket with all the marbles, and now we're in it and we're running it. And when we run across line four, there's a marble called teacher in the target position. So we discover the source versus target position at compile time, but we don't use that information until run time.

// [00:01:15]
// Does that help?
// >> Speaker 1: Yep, thank you.
// >> Speaker 3: So it creates a place holder essentially?
// >> Kyle Simpson: Yeah, basically think of it like a treasure map, right. There's a map, there's a plan, it's like a to do list for every scope, that's what compiler outputs, that's the executable code. And then when it runs is when it all actually comes into existence.

// [00:01:35]
// Yeah.
// >> Speaker 4: One more question. When we enter the scope of that function, I mean if we enter multiple times, there's another process that resets the values and things. How does that work, you know what I'm saying?
// >> Kyle Simpson: Every time you execute a function, the environment is recreated from scratch.

// [00:01:54]

// >> Speaker 4: Okay, so what does that actually, is it like in the compiler? I don't know.
// >> Kyle Simpson: So remember, the compiler only makes a plan for the bucket, it says, hey whenever you need a green bucket, this is what the green bucket ought to look like, and this is what it's contents ought to be, but it doesn't actually exist yet.

// [00:02:08]
// And then every time you execute the green bucket, that plan is effected into memory. And then when the green bucket finishes that plan, all that stuff goes away, and then the next time you run it, it creates it from the plan again, okay. So the compiler output is not actually reserved memory, it's the plan for how to reserve memory and make marbles and all that.


