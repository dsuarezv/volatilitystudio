# Volatility Studio

A GUI for the [Volatility framework v3](https://github.com/volatilityfoundation/volatility3) written in Javascript with Electron. It runs on Windows, Linux and OSX.

For now a starting point to experiment with Windows memory images.

## Trying it

I have only tested this in Windows with Anaconda for now.

### Setting up volatility3 with Anaconda

Open an Anaconda command prompt and type the following commands

    conda create --name=volatility3 python=3.8  pefile
    conda activate volatility3
    cd path_to_contain_volatility
    git clone https://github.com/volatilityfoundation/volatility3

Try your installation with

    cd volatility3       (this is your VOLATILITYPATH value)
    python vol.py -h

You should get a list of supported options and commands from volatility. Please refer to [the volatility project page on GitHub](https://github.com/volatilityfoundation/volatility3) for details of the installation.

### Volatility Studio

You need to create .env file in the root of the VolatilityStudio project with this content:

    PYTHONPATH=C:\Users\user\.conda\envs\volatility3
    VOLATILITYPATH=C:\Users\user\path\to\volatility3\cloned\repo
    MEMORYIMAGE=C:\Users\user\Downloads\MemoryImageToAnalyze.bin

To get the PYTHONPATH value, run "conda env list" and copy the location of your volatility3 environment.

Install node packages:

    npm install

After that, start VolatilityStudio with:

    npm run dev
