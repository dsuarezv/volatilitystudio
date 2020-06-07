# Volatility Studio 

A GUI for the [Volatility framework v3](https://github.com/volatilityfoundation/volatility3) written in Javascript with Electron. It runs on Windows, Linux and OSX. 

For now a starting point to experiment.


## Trying it

I have only testid this in Windows with Anaconda for now. So, first, install Anaconda and create an enviroment for volatility3 following the instructions in their repo. Clone the volality3 repo somewhere in your disk. 

You need to create .env file in the root of the VolatilityStudio project with this content: 

    PYTHONPATH=C:\Users\user\Anaconda3\envs\volatility3
    VOLATILITYPATH=C:\Users\user\path\to\volatility3\cloned\repo
    MEMORYIMAGE=C:\Users\user\Downloads\MemoryImageToAnalyze.bin

After that, start it with: 

    npm run dev