import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";

export default function About() {

    return (
        <div id="about" className="w-full p-12 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4">
                <Image src={"/avatar.jpg"} draggable={false} width={512} height={512} alt="avatar" className="border rounded-2xl" />
                <Card className="duration-500 w-full md:w-[340px] lg:w-[520px] xl:w-[600px] 2xl:w-[720px] h-[512px] overflow-y-auto scrollbar-thin scrollbar-thumb-red-700 scrollbar-track-neutral-700 scrollbar-thumb-rounded-md scrollbar-track-rounded-md">
                    <CardHeader>
                        <CardTitle>A bit about me</CardTitle>
                        <CardDescription>Here you can get to learn about me.</CardDescription>
                    </CardHeader>
                    <CardContent className="about">
                        <span>Hello, my name is Rusty! </span>
                        <span>A young self taught programmer who is passionate for pushing the boundaries of what is possible. </span>
                        <span>I was born and raised in Michigan in the United States. </span>
                        <span>I grew up in a town known as Owosso and always had a taste for technology. </span>
                        <span>My first experience with programming is when I had tried to make a discord bot using something known as <Link target="_blank" href={"https://discord.js.org"}>discord.js.</Link> </span>
                        <span>I have quite a lot of experience making discord bots and would even call myself an expert in making them. </span>
                        <span>Me and my friend <Link target="_blank" href={"https://www.linkedin.com/in/dominikkoch/"}>dominik</Link> used to make a lot of discord bots together and one that was getting sort of big was called MelloTunes, you could play music in a voice channel with it and it also had economy commands, the bot was in 90 guilds which was insane, I had lost access to my discord account when I lost my 2FA code unfortunately and then all development on the bot was halted, now I know to keep backup codes for 2FA though! </span>
                        <span>Discord bots were not the only thing that I made however, afterward I experienced an interest in web development and got to mess around with html, I wanted to make my own website at the time and thought that it would be cool, it wasn't really my slice of cake at the time and I stopped doing anything with it though. </span>
                        <span>Then I decided to try my hand at Java and worked on plugins for a minecraft server, for a software called <Link target="_blank" href={"https://cloudburstmc.org"}>Nukkit</Link>, which was actually quite fun. </span>
                        <span>I got to learn how minigames are made for big minecraft servers such as Hypixel. </span>
                        <span>Java was the programming language that I actually had to try harder with compared to JavaScript and even prepared me for the next thing. </span>
                        <span>So the next thing I am talking about is Robotics, my school has a high school robotics team and I thought it would be really cool to join and put my programming skills to the test. </span>
                        <span>We used Java as the programming language because that is what I knew and I heard that you could use Java for writing robot code. </span>
                        <span>It was quite difficult at first because you never really knew if the issue was the code or an actual hardware problem with the robot. </span>
                        <span>Robotics is amazing because you have real world scenarios and you need to get your robot to do those tasks, such as climbing or balancing. </span>
                        <span>But Robotics can also be very stressful, everyone is always depending on you no matter what your job is. </span>
                        <span>During competitions, you may have to fix a bug in the code or check the robot for things but do not have enough time, so you are just casually trying to do stuff with the robot while the other team members are moving the robot onto the field. </span>
                        <span>Robotics has taught me about how gyroscopes can be used to figure out the pitch, yaw, and roll of the object it is currently on, which can be very helpful for balancing the object if you have a way of moving it somehow based on the data. </span>
                        <span>PID is also another thing I have learned from Robotics, which stands for Proportional, Integral, and Derivative. </span>
                        <span>You can have something known as a PID Controller which is responsible for slowing machinery down as it is getting closer to a certain target. </span>
                        <span>This is very essential in the world of robotics for the robot to autonomously make clean and precise movements. </span>
                        <span>A PID Controller can also find efficient ways to get to a target, if you have a circle and you need to get to a specific angle, you don't want to take the long way around to get there, but a PID Controller can find the closest direction and give the output to go that way. </span>
                        <span>With PID Controllers you have a lot to think about such as friction, gravity, or many other factors that could alter the results of the PID Controller. </span>
                        <span>Outside of robotics I still do some programming, usually web development stuff this time, I got to mess around with react and now I am quite interested in web development. </span>
                        <span>React makes it so easy for developrs to make websites compared to using raw HTML, JavaScript, and CSS because it can do a lot of the heavy lifting for you. </span>
                        <span>I tried messing with just HTML again but dynamically loading data just doesn't seem to go as well compared to when I am using React. </span>
                        <span>If you want an app that scales and is fast I think using a framework such as react, angular, or next.js is important. </span>
                        <span>Nowadays things are going great, I and other talented developers are working on an upcoming platform known as <Link target="_blank" href={"https://strafe.chat"}>strafe.chat</Link> whose plan is to bring "Freedom of Speech", the platform will be similar to discord but not silence or ban you for any false reasons. </span>
                        <span>We had some issues and had to close the alpha to it because people were abusing specific things, but we will be working on improving the security of the app to make strafe an alternative to use besides discord. </span>
                        <span>But my luck doesn't stop just there, I am also a youth mentor for my school's newly established middle school robotics team. </span>
                        <span>So I will be doing my best to make sure that I can influence them to become great programmers for the future. </span>
                        <span>I am excited for the future and what it will bring, I can't wait until I get to learn even more new things as technology continues to evolve!</span>
                    </CardContent>
                </Card>
            </div>
        </div>

    )
}