def yes_no_prompt(text, default):
    override = "y" if default == "n" else "n"
    response = input(f"{text}{"[Y/n] " if default == "y" else "[y/N] "}")

    is_yes = lambda res: res == "y"

    if response != override:
        return is_yes(default)
    else:
        return is_yes(override)

def str_prompt(text, default, override):
    response = input(f"text[{default}/{override}]")

    if response != override:
        return default
    else:
        return override
