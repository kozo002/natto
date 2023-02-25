'use client'

import { useState, useCallback } from 'react'
import redaxios from 'redaxios'

import { Button } from 'components/atoms/Button'
import { Input } from 'components/atoms/Input'
import { FormGroup } from 'components/molecules/FormGroup'
import { Label } from 'components/atoms/Label'
import { InputTrailingView } from 'components/molecules/InputTrailingView'

type Thing = {
  name: string
}

export function DiaryForm() {
  const [thingsDoneToday, setThingsDoneToday] = useState<Array<Thing>>(() => [{ name: '' }])

  const handleAddThingDoneTodayButtonClick = useCallback(() => {
    setThingsDoneToday([...thingsDoneToday, { name: '' }])
  }, [thingsDoneToday])

  async function handleSubmit() {
    const res = await redaxios.post('/api/test')
    console.log(res.data)
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-4 p-6 rounded border"
      >
        <FormGroup>
          <Label name="breakfast">朝食</Label>
          <Input
            name="breakfast"
            value=""
          />
        </FormGroup>

        <FormGroup>
          <Label name="lunch">昼食</Label>
          <Input
            name="lunch"
            value=""
          />
        </FormGroup>

        <FormGroup>
          <Label name="dinner">夕食</Label>
          <Input
            name="dinner"
            value=""
          />
        </FormGroup>

        <FormGroup>
          <Label>やったこと</Label>
          {thingsDoneToday.map((thing) => (
            <InputTrailingView
              input={
                <div className="flex flex-col gap-y-2">
                  <Input
                    name="hoge"
                    value={thing.name}
                    placeholder="名前：例 ジョギング"
                  />
                  <Input
                    name="fuga"
                    value={thing.name}
                    placeholder="感想：例 いつもより長く走れてよかった。次は・・・"
                  />
                </div>
              }
            >
              <Button
                type="button"
                variant="secondary"
              >
                &times;
              </Button>
            </InputTrailingView>
          ))}
          <Button
            type="button"
            variant="secondary"
            onClick={handleAddThingDoneTodayButtonClick}
          >
            + 追加
          </Button>
        </FormGroup>

        <Button
          type="submit"
          variant="primary"
        >
          送信
        </Button>
      </form>
    </div>
  )
}
